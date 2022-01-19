import React, { useContext } from 'react'
import './messenger.css'
import Navbar from '../../components/navbar/Navbar'
import Conversations from '../../components/conversations/Conversations'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { AuthContext } from '../../context/AuthContext'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { io } from 'socket.io-client'


export default function Messenger() {

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([])

    const socket = useRef()

    const {user} = useContext(AuthContext);

    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");

        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender : data.senderId,
                text : data.text,
                createdAt : Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage && 
           currentChat?.members.includes(arrivalMessage.sender) && 
           setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);

        socket.current.on("getUsers", (users) => {
            setOnlineUsers(
                user.followings.filter((f) => users.some((u) => u.userId === f))
            );
        })
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try{
                const res = await axios.get("/conversations/" + user._id);
                setConversations(res.data);
            }
            catch(err){
                console.log(err);
            }  
        }
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try{
                const res = await axios.get("/messages/" + currentChat?._id);
                setMessages(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = {
            sender : user._id,
            text : newMessage,
            conversationId : currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );

        socket.current.emit("sendMessage", {
            senderId : user._id,
            receiverId,
            text : newMessage,
        });

        try{
            const res = await axios.post("/messages", message);

            setMessages([...messages, res.data]);

            setNewMessage("");
        }
        catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    return (
        <>
            <Navbar></Navbar>
            <div className='messenger'>
                <div className="chat-menu">
                    <div className="chatMenu-wrapper">
                        <input placeholder='Search for friends' className='chatMenu-input'></input>
                        {conversations.map(c => (
                            <div onClick={() => setCurrentChat(c)}>
                                <Conversations conversation={c} currentUser={user}></Conversations>
                            </div>   
                        ))}  
                    </div>
                </div>

                <div className="chat-box">
                    <div className="chatBox-wrapper">
                        {
                            currentChat ? 
                            <>
                                <div className="chatBox-top">
                                    {messages.map((m) => (
                                        <div ref={scrollRef}>
                                            <Message message={m} own={m.sender === user._id}></Message>
                                        </div>    
                                    ))}
                                </div>

                                <div className="chatBox-bottom">
                                    <textarea 
                                        className='chat-input' 
                                        placeholder='write something...'
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}
                                        ></textarea>
                                    <button className='chat-btn' onClick={handleSubmit}>Send</button>
                                </div>
                            </> : <span className='noConversation-text'>Open a conversation to start a chat</span>
                        }
                        
                    </div>
                </div>
                <div className="chat-online">
                    <div className="chatOnline-wrapper">
                        <ChatOnline onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat}></ChatOnline>
                    </div>
                </div>
            </div>
        </>       
    )
}
