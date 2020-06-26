In this app I used Start wars graphQL Api with React js and for local state management i used [Apollo-client v3.0 beta](https://www.apollographql.com/docs/react/v3.0-beta/migrating/apollo-client-3-migration/) which allowed me to write a query and receive data without manually tracking loading states as with React useSate Hook.

#### `Apollo client hooks` that has been used in the app:

To automatically executes the specified query, I used `useQuery` hook from apollo-client which it will trigger When React mounts and renders a component.

To manually executing queries in response to events other than component rendering, I used `useLazyQuery` which returns a function that can be called manually.

#### `The App Map`:

> index.js

> > App.ja
>
> > Pages folder: Home.js / Film.js / Character.j

> > assets: All images

> > Utils: Helper js to covert fetched strings to Title Case

> > Components folder:

> > > character folder: CharacterCard.js / CharacterItem.js / FilmItem.js

> > > Film folder: FilmDetail.js

> > > home folder: CharacterCardHome.js / CharacterList.js / Search.js / SearchedCharacter.js

#### `What's in` :

- I have tried to separate folders in a way that makes it easy to understand the connection between each page in Pages Folder and the related sub-folder in Components folder.

- In assets folder, I stored the photos and some `screenshots` of the app to help in visualize it.

- In utils folder I stored javascript pure function to help converting strings to title-case to help dealing with some inconsistent data.

- App extra Dependencies: @apollo/client / GraphQl / react-router-dom

Deployed App: https://romantic-williams-8e2e9a.netlify.app/
