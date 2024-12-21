
import { createSlice } from '@reduxjs/toolkit';
import twi from '../assets/twi.png';
import disc from '../assets/disc.png';
import face from '../assets/face.png';
import mess from '../assets/mess.png';
import red from '../assets/red.png';
import tele from '../assets/tele.png';
import whats from '../assets/whats.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import facebook from '../assets/facebook.png';
import messenger from '../assets/messenger.png';
import reddit from '../assets/reddit.png';
import twitter from '../assets/twitter.png';
import whatsapp from '../assets/whatsapp.png';

const initialState = {
    images: [
        // { img: twi},
        { img: twitter, name: 'Twitter' },
        // { img: face},
        { img: facebook, name: 'Facebook' },
        // { img: red},
        { img: reddit, name: 'Reddit' },
        // { img: disc},
        { img: discord, name: 'Discord' },
        // { img: whats},
        { img: whatsapp, name: 'Whatsapp' },
        // { img: mess},
        { img: messenger, name: 'Messenger' },
        // { img: tele},
        { img: telegram, name: 'Telegram' },
    ],
};

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addImage(state, action) {
            state.images.push(action.payload);
        },
        removeImage(state, action) {
            state.images = state.images.filter((_, index) => index !== action.payload);
        },
    },
});

export const { addImage, removeImage } = imagesSlice.actions;

export default imagesSlice.reducer;
