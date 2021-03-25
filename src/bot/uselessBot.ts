import { Telegraf } from 'telegraf';
import { BOT_TOKEN } from '../.env/botToken';

export const uselessBot = new Telegraf(BOT_TOKEN);

uselessBot.command('help', (ctx) => {
    ctx.reply('botardo by fasuto');
});

uselessBot.hears('gian', (ctx) => {
    ctx.reply('Alguien dijo gian?? que bello que sos gian, AYYYYYYYYYYYYYY');
});

uselessBot.hears('miedo', (ctx) => {
    const { id, first_name, last_name } = ctx.from;
    ctx.reply(`Tu id es ${id}, hackeado capooooooooooooooooooooooooo`);
});

uselessBot.on('text', (ctx) => {
    // ctx.reply('cerra el orto');
    const { text } = ctx.message;
    const { id, first_name, last_name } = ctx.from;

    text.includes('gian') &&
        ctx.reply(
            'Alguien dijo gian?? que bello que sos gian, AYYYYYYYYYYYYYY'
        );

    text.includes('miedo') &&
        ctx.reply(`Tu id es ${id}, hackeado capooooooooooooooooooooooooo`);
});
