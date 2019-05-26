# Getting Started

1. Clone the repo:

```
git clone https://github.com/pro-cras/followers-list-fullstack.git
```

2. Install dependencies for both server and client

```
yarn && cd client && yarn
```

or

```
npm install && cd client && npm install
```

3. Create .env file for API keys, in the root folder

```
TWITTER_ACCESS_TOKEN=<your token here>
TWITTER_ACCESS_TOKEN_SECRET=<your token secret here>
```

4. Start the app

```
yarn start
```

or

```
npm run  start
```

# Things I'd do differently

1.  Avoid nested structure (client project inside server project). Installing dependencies of client and server app separately makes starting up more difficult.

    - Option 1: yarn workspaces
    - Option 2: Next.js. Single, SSR app

# Things I'd improve

1. Error handling:
   - No such user
   - For protected users (like `@aa`), the follower list is private
1. Make API requests cancellable, using AbortController
1. Responsiveness: The input field in the header is not responsive
1. Styling: More consistent format for username + screenname. followers list doesn't match selected user.
1. Improve styling of buttons
1. State: No need to keep a global `isLoading` state in the app reducer. Every request should maintain it's state, as I did for the followers request
