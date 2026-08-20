# 🎮 Car Traffic Puzzle - Telegram Mini Game

Jeu de puzzle de trafic routier optimisé pour Telegram.

---

## 🚀 Déploiement sur Vercel

### Étape 1 : Préparer le projet
```bash
# Cloner ou télécharger le dossier
cd cartraffic-telegram

# Initialiser git (si nécessaire)
git init
git add .
git commit -m "Initial commit: Car Traffic Puzzle Telegram"
```

### Étape 2 : Déployer sur Vercel
```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel deploy

# Vous recevrez une URL :
# https://cartraffic-telegram.vercel.app
```

---

## 🤖 Créer le Bot Telegram

### Étape 1 : BotFather (@BotFather)
1. Ouvrir Telegram
2. Chercher `@BotFather`
3. Taper `/newbot`
4. Nom : `Car Traffic Puzzle`
5. Username : `car_traffic_puzzle_bot`
6. Copier le **token** reçu

### Étape 2 : Configurer le WebApp
```
/setmenubutton
Sélectionnez : @car_traffic_puzzle_bot
URL WebApp : https://cartraffic-telegram.vercel.app
```

### Étape 3 : Tester
```
Chercher : @car_traffic_puzzle_bot
Cliquer : "Play"
```

---

## 📊 Intégration des Ads

### Banner Ads (Haut/Bas)
```javascript
// Telegram affiche automatiquement via AppKit
// Pas de configuration supplémentaire nécessaire
```

### Interstitial Ads (Fin de partie)
```javascript
// Afficher après chaque niveau complété
window.showInterstitialAd?.();
```

### Rewarded Ads (Bonus)
```javascript
// Utilisateur regarde pub pour bonus
// Montrer "Regarder une pub pour +50 points ?"
```

---

## 🎯 Promotion

### Groupes Telegram
```
@JeuxTelegramGratuits
@GamingFrance
@TelegramGames
@MobileGaming

Poster :
🎮 Nouveau jeu gratuit - Car Traffic Puzzle
▶️ @car_traffic_puzzle_bot
```

### Facebook Ads
```
Lien : https://t.me/car_traffic_puzzle_bot
Budget : $10-50
Ciblage : Intérêts gaming + Telegram
```

---

## 📱 Fichiers Importants

- **index.html** - Page principale avec Telegram WebApp SDK
- **data.json** - Données du jeu (48 niveaux)
- **scripts/** - Logique Construct 3
- **images/** - Assets du jeu optimisés
- **media/** - Sons (WebM)

---

## 💡 Conseils

- ✅ Tester sur mobile d'abord
- ✅ Vérifier console browser (F12)
- ✅ Utiliser Telegram pour alertes
- ✅ Sauvegarder scores localement
- ✅ Mesurer les clics via Google Analytics

---

**Créé avec ❤️ pour Telegram Gaming**
