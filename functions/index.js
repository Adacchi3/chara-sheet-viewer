const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express');
const app = express();
const admin = require('firebase-admin');

console.log("hogehogehogehogehoge");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const url = "";
const site_name = "chara-sheet-viewer";
const title = "chara-sheet-viewer";
const meta_description = "クトゥルフ神話TRPGのキャラクターシートを共有するサイトです。";
const meta_keywords = ["クトゥルフ神話","クトゥルフ神話TRPG","TRPG","キャラシ","キャラクターシート","CoC"];
const og_description = "クトゥルフ神話TRPGのキャラクターシートを共有するサイトです。";
const og_image_width = 640;
const og_image_height = 480;
const fb_appid = "";
const tw_description = "クトゥルフ神話TRPGのキャラクターシートを共有します！";
const tw_site = "";
const tw_creator = "";

const genHtml = image_url => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charaset="utf-8">
      <title>${title}</title>
      <meta name="description" content="${meta_description}">
      <meta name="keywords" content="${meta_keywords.join(',')}">
      <meta property="og:locale" content="ja_JP">
      <meta property="og:type" content="website">
      <meta property="og:url" content="${url}">
      <meta property="og:title" content="${title}">
      <meta property="og:site_name" content="${site_name}">
      <meta property="og:description" content="${og_description}">
      <meta property="og:image" content="${image_url}">
      <meta property="og:image:width" content="${og_image_width}">
      <meta property="og:image:height" content="${og_image_height}">
      <meta property="fb:app_id" content="${fb_appid}">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${title}">
      <meta name="twitter:description" content="${tw_description}">
      <meta name="twitter:image" content="${url}}">
      <meta name="twitter:site" content="${tw_site}">
      <meta name="twitter:creator" content="${tw_creator}">
    </head>
    <body>
    </body>
  </html>
`;

app.get('/s/:id', (req, res) => {
  db.collection('cards')
    .doc(req.params.id)
    .get()
    .then(result => {
      if (!result.exists) {
        res.status(404).send('404 Not Exist');
      } else {
        const data = result.data();
        const html = genHtml(data.url);
        res.set('cache-control', 'public, max-age=3600');
        res.send(html);
      }
    });
});
exports.s = functions.https.onRequest(app);