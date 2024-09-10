## jpc-events

```
git clone git@github.com:johnpc/jpc-events.git
cd jpc-events
npm install
echo "ADMIN_API_KEY=$(openssl rand -hex 20)" >> .env
npx ampx sandbox --once
npx tsx scripts/test.ts # You should see some number of events get successfully created
npm run dev
# Visit localhost:3000 and chat with the bot
# Ask "what events are this weekend in Ann Arbor" and it should tell you about the events you seeded
```
