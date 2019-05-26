# Getting Started

1. Clone the repo:

```
git clone
```

2. Install dependencies for both server and client

```
yarn && cd ./client && yarn
```

or

```
npm install
```

# Things I'd to differently

1. Improve project setup.

- Avoid nested structure. Installing dependencies of client and server app separately makes starting up too difficult.
- Option 1: yarn workspaces
- Option 2: Next.js. Single, SSR app

# Things I'd improve

1. Error handling:
   - No such user
   - For protected users (like `@aa`), the follower list is private
1. Make API requests cancellable, using AbortController
1. Responsiveness: The input field in the header is not
1. Styling: More consistent format for username + screenname. followers list doesn't match selected user.
1. Improve styling of buttons
1. Header should be fixed to top of page
1. State: No need to keep a global `isLoading` state in the app reducer. Every request should maintain it's state, as I did for the followers request
