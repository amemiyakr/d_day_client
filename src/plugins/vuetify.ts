import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify(
    {
        theme: {
            themes: {
                light: {
                    primary: '#673ab7',
                    secondary: '#ff9800',
                    accent: '#ff5722',
                    error: '#e91e63',
                    warning: '#ffc107',
                    info: '#00bcd4',
                    success: '#009688'
                },
                dark: {
                    primary: '#673ab7',
                    secondary: '#ff9800',
                    accent: '#ff5722',
                    error: '#e91e63',
                    warning: '#ffc107',
                    info: '#00bcd4',
                    success: '#009688'
                },
            },
        },
    })
// {
//     primary: #673ab7,
//     secondary: #ff9800,
//     accent: #ff5722,
//     error: #e91e63,
//     warning: #ffc107,
//     info: #00bcd4,
//     success: #009688
//     }

export default vuetify;
