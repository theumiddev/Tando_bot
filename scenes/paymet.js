const {Telegraf, Markup } = require('telegraf')

Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet', 'Visa/Master Card', 'Qiwi', 'Orqaga🔙'],{
    wrap: (btn, index, currentRow) => currentRow.length >= (index + 7) / 7
})
  
bot.hears('Uzcard', (ctx)=>{
    ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

    💳Uzcard 1: 
    💳Uzcard 2: 
    👤 Sobirov Umidjon`)
    ctx.reply(`To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾`)
})

bot.hears(`Click`, (ctx)=>{
    ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

    💳Uzcard 1: 
    💳Uzcard 2: 
    👤 Sobirov Umidjon`)
    ctx.reply(`To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾`)
})

bot.hears(`Payme`, (ctx)=>{
    ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

    💳Uzcard 1: 
    💳Uzcard 2: 
    👤 Sobirov Umidjon`)
    ctx.reply(`To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾`)
})

bot.hears(`Paynet`, (ctx)=>{
    ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

    💳Uzcard 1: 
    💳Uzcard 2: 
    👤 Sobirov Umidjon`)
    ctx.reply(`To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾`)
})

bot.hears(`Visa/Master Card`, (ctx)=>{
    ctx.reply(``)
    ctx.reply('To’lovni amalga oshirgan bolsangiz, chekni bizga jonating 🧾')
})

bot.hears(`Qiwi`, (ctx)=>{
    ctx.reply(``)
    ctx.reply('To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾')
})