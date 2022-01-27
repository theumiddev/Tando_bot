const { Telegraf,  Markup} = require("telegraf")
require('dotenv').config()
const bot = new Telegraf(process.env.TOKEN);
const app = require('express')();
n
app.get("/",(req, res)=>{
  res.send("hello world");
});

app.listen(process.env.PORT, () =>
  console.log( `Listening on port ${process.env.PORT}`)
);

bot.start((ctx) =>{
    const {first_name} = ctx.message.from
    ctx.reply(`Salom ${first_name} uc va garant botga hush kelibsiz.`, Markup
    .keyboard(['🧑‍💻ADMIN / ALOQA🧑‍💻', 'UC💸', '✅GARANT✅'])
    .resize()
    )
    ctx.replyWithSticker({ source: 'tando.jpg' })
})
// ! ===================== ADMIN =====================
bot.hears('🧑‍💻ADMIN / ALOQA🧑‍💻', (ctx) => {
    return ctx.reply(`

👤TANDO uc admini:@TANDO_UC_GARANT

🧑‍💻 TANDO UC bot admini:@sobirov_dev

`, Markup.keyboard(['Bosh menyu🔙'])
.resize()
)
})
//! ===================== ADMIN ===========================
//! ================== uc  service start ===================

bot.hears('UC💸', (ctx) => {
    return ctx.reply(
      'Pubg Mobile uchun UC (Global)',
      Markup.keyboard(['60uc', '120uc', '180uc', '325uc', '385uc', '660uc', '720uc', '985uc', '1320uc', 
           '1800uc', '2460uc', '3850uc', '4510uc', '5650 uc', '8100uc', '', 'Bosh menyu🔙'], {
        wrap: (btn, index, currentRow) => currentRow.length >= (index + 16) / 9
      })
    )
  })

  bot.hears('60uc', (ctx) => {  
    return ctx.reply(`
60 UC - 14ming so'm

95 RUB
1 USD$

To’lov turini tanlen⬇️`,
Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet', 'Bosh menyu🔙'],{
  wrap: (btn, index, currentRow) => currentRow.length >= (index + 7) / 7
})
)
})

bot.hears('120uc', (ctx) => {  
  return ctx.reply(`120 UC - 27.000 so’m

  181 RUBL
  2 USD
  
  To’lov turini tanlen⬇️`,
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'],{
    wrap: (btn, index, currentRow) => currentRow.length >= (index + 7) / 7
  })
  )
}) 

bot.hears('180uc', (ctx) => {  
  return ctx.reply(`180 UC - 38 ming so’m
  
  255 RUBL
  3 USD $

  To’lov turini tanlen ⬇️`,
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
  )
}) 

bot.hears('325uc', (ctx) => {  
  return ctx.reply(`325 UC - 58 ming so’m Royal PASS 

  390 RUBL
  5.5$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 

bot.hears('385uc', (ctx) => {  
  return ctx.reply(`385 UC - 72 ming so'm (Royal PASS)

  485 RUBL
  6.5$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 

bot.hears('660uc', (ctx) => {  
  return ctx.reply(`660 UC - 107 ming so'm

  720 RUBL
  10$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet', 'Bosh menyu🔙'])
}) 


bot.hears('720uc', (ctx) => {  
  return ctx.reply(`720 UC - 120 ming so'm

  807 RUBL
  11$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 

bot.hears('985uc', (ctx) => {  
  return ctx.reply(`985 UC - 165 ming so'm (ELITE RP) 

  1110 RUBL
  15.5$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet', 'Bosh menyu🔙'])
}) 

bot.hears('1320uc', (ctx) => {  
  return ctx.reply(`1320 UC - 212 ming so'm

  1426 RUBL
  20$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 

bot.hears('1800uc', (ctx) => {  
  return ctx.reply(`1800 UC - 260 ming so'm

  1750 RUBL
  25$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 

bot.hears('2460uc', (ctx) => {  
  return ctx.reply(`2460 UC - 365 ming so'm

  2455 RUBL
  34$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 

bot.hears('3850uc', (ctx) => {  
  return ctx.reply(`3850 UC - 510 ming so'm

  3400 RUBL
  48$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 

bot.hears('4510uc', (ctx) => {  
  return ctx.reply(`4510 UC - 610 ming so'm (RP FULL)

  4050 RUBL
  57$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 


bot.hears('5650uc', (ctx) => {  
  return ctx.reply(`5650 UC - 770 ming so'm

  5100 RUBL
  72$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 


bot.hears('8100uc', (ctx) => {  
  return ctx.reply(`5650 UC - 770 ming so'm

  5100 RUBL
  72$ USD
  
  To’lov turini tanlen ⬇️`),
  Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'])
}) 
//! =====================Patmet===============================
Markup.keyboard(['Uzcard', 'Click', 'Payme', 'Paynet',  'Bosh menyu🔙'],{
  wrap: (btn, index, currentRow) => currentRow.length >= (index + 5) / 5
})

bot.hears('Uzcard', (ctx)=>{
  ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

  💳Humo: 9860030129853336

  👤 Narimonov Sanjar`)

  ctx.reply(`To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾`)
})

bot.hears(`Click`, (ctx)=>{
  ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

  💳Humo: 9860030129853336

  👤 Narimonov Sanjar`)

  ctx.reply(`To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾`)
})

bot.hears(`Payme`, (ctx)=>{
  ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

  💳Humo: 9860030129853336

  👤 Narimonov Sanjar`)

  ctx.reply(`To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾`)
})

bot.hears(`Paynet`, (ctx)=>{
  ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

  💳Humo : 9860030129853336

  👤 Narimonov Sanjar`)
  ctx.reply(`To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾`)
})

// bot.hears(`Visa-Master Card`, (ctx)=>{
//   ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

//   💳Uzcard 1: 
//   💳Uzcard 2: 
//   👤 Sobirov Umidjon`)
//   ctx.reply('To’lovni amalga oshirgan bolsangiz, chekni bizga jonating 🧾')
// })

// bot.hears(`Qiwi`, (ctx)=>{
//   ctx.reply(`Shu uzcard nomeri kopya qilin va istalgan prilojeniya orqali kirip, kartaga pul otqazish funksiyasini tanlap shu karta raqamini kiriting va to’lov qiling⬇️

//   💳Uzcard 1: 
//   💳Uzcard 2: 
//   👤 Sobirov Umidjon`)
//   ctx.reply('To’lovni amalga oshirgan bo’lsangiz, chekni bizga jonating 🧾')
// })
//! ==========================================================
// !====================== Garant ============================

bot.hears('✅GARANT✅', (ctx) => {  
    return ctx.reply(` 
Garant hizmati shartlari:
Akkount olish yoki sotishda garant turibberish xizmati mavjud. Garant turib berish narxi 5%.
AKkkount obmen yani almashishda ham garant hizmatimiz mavjud. Akkount obmen  garant xizmati 10%
Akkount oldi-sotdi garant: @TANDO_UC_GARANT
Akkount obmen bo'yiga garant: @TANDO_UC_GARANT
    `, 
    Markup.keyboard(['Bosh menyu🔙'])
    .resize()
    )
}) 

//! ======================Bosh menyu===========================
bot.hears('Bosh menyu🔙', (ctx) =>{
  ctx.reply(`Bosh menyu`, Markup
  .keyboard(['🧑‍💻ADMIN / ALOQA🧑‍💻', 'UC💸', '✅GARANT✅'])
  .resize()
  )
})

bot.launch().then(console.log("bot started"))
