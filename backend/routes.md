# Routes

## Example Cake route
POST /cake: \
Creates a new cake entity in database
Params:

| Name | Type                     | Description            |
|------|--------------------------|------------------------|
| name | String                   | The name of the cake   |
| type | enum(chocolate, vanilla) | The flavor of the cake |
Response:
A JSON-encoded copy of the entity which was created.

Example request:
```

axios.post(/cake. {
   params: {name: "bob", flavor : "vanilla"}
});

/cake?name=Bob&flavor=vanilla

{
   "name": "Bob",
   "flavor": "vanilla"
}
```

Example response:
```
{
   "id": "000000-0000-000000000",
   "name": "Bob",
   "flavor": "vanilla"
}
```

GET /cake \
dis is a get request
&#9744; &#9745;
| Name   | Type                     | Description            |
|------  |--------------------------|------------------------|
| name   | String                   | The name of the cake   |
| type   | enum(chocolate, vanilla) | The flavor of the cake |

```
/cake?type=chocolate

[
   {
      id: ...
      name: ...
      flavor: chocolate
   },
   {
      ...
   },
   ...
]

```
...



GET /cake/{cakeID}
response
```
{
   ...
}
```

## Events
### POST /event: \
Creates a new event entity in database
Params:

| Name | Type                     | required | Description            |
|------|--------------------------|----------|------------------------|
| key  | String                   |  &#9745; | Access key of admin permission level  |

Body:
| Name     | Type                     | required | Description               |
|----------|--------------------------|----------|---------------------------|
| name     | String                   |  &#9745; | The name of the event     |
| type     | enum(gm, workshop, devnight, social, other) | &#9745; | The type of event   |
| location | String  | &#9745; | The location of the event      |
| date     | String  | &#9745; | The date of the event format string like `"MM/DD/YYYY"` |


Response:
A JSON-encoded copy of the entity which was created.

Example request:
```
axios.post('/user', {
   key: 'super-secret-key',
   body: {
    name: 'egads super fun meetup',
    type: 'social',
    location: 'your mom's house',
    date: '04/20/2020'
  }
});
```

Example response:
```
{
   "id": "000000-0000-000000000",
   "name": "egads super fun meetup",
   "type": "social",
   "location": "your mom's house",
   "date": "04/20/2020"
}
```

### GET /event: \
Gets an event based on name or date

Params:

| Name     | Type      | required | Description            |
|----------|-----------|----------|------------------------|
| key      | String    | &#9744; | Access key of admin permission level  |
| name     | String    | &#9744; | The name of the event     |
| type     | enum(gm, workshop, devnight, social, other) | &#9744; | The type of event   |
| location | String    | &#9744; | The location of the event      |
| date     | String    | &#9744; | The date of the event format string like `"HH:MM MM/DD/YYYY"` |
| banner   | String    | &#9745; | string of banner image for the event |


Response:
A JSON-encoded copy of the entity which was requested.

Example request:
```
axios.get('/event?type=social');
```

Example response:
```
{
   "id": "000000-0000-000000000",
   "name": "egads super fun meetup",
   "type": "social",
   "location": "your mom's house",
   "date": "04:20 04/20/2020"
}
```

## Users
### POST /user: \
Creates a new user in database
Params:

| Name | Type                     | required | Description            |
|------|--------------------------|----------|------------------------|
| key  | String                   |  &#9745; | Access key of admin permission level  |

Body:
| Name     | Type                     | required | Description               |
|----------|--------------------------|----------|---------------------------|
| name     | String                   |  &#9745; | The name of the user     |
| type     | enum(member, alum, officer, jo, general, industry, staff) | &#9745; | The type of user   |
| discipline | String  | &#9745; | Main discipline of user      |
| year     | enum(freshman, sophomore, junior, senior, super senior, old)  | &#9744; | Year for student users |
| goog     | String  | &#9745; | auth stuff maybe |
| games    | String[]  | &#9744; | IDs for games the user has contributed to       |

Response:
A JSON-encoded copy of the entity which was created, but not goog

Example request:
```
axios.post('/user', {
   key: 'super-secret-key',
   body: {
    name: 'old man jankins',
    type: 'member',
    discipline: 'music',
    year: 'super senior',
    goog: 'googooogoog',
    games: 'super-meat-boy-id'
  }
});
```

Example response:
```
{
   "id": "000000-0000-000000000",
   "name": "old man jankins",
   "type": "member",
   "discipline": "music",
   "year": "super senior",
   "games": [
      "super-meat-boy-id"
   ]
}
```

### GET /user: \
Gets a user based on name
Params:

| Name | Type                     | required | Description            |
|------|--------------------------|----------|------------------------|
| key  | String                   |  &#9744; | Access key of admin permission level  |
| name     | String                   |  &#9744; | The name of the user     |
| type     | enum(member, alum, officer, jo, general, industry, staff) | &#9744; | The type of user   |
| discipline | String  | &#9744; | Main discipline of user      |
| year     | enum(freshman, sophomore, junior, senior, super senior, old, non-student)  | &#9744; | Year for student users |
| games    | String[]  | &#9744; | IDs for games the user has contributed to   |


Response:
A JSON-encoded copy of the entity which was requested, but no goog.

Example request:
```
axios.get('/user?name=old-man-jankins');
```

Example response:
```
{
   "id": "000000-0000-000000000",
   "name": "old man jankins",
   "type": "member",
   "discipline": "music",
   "year": "super senior",
   "games": [
      "super-meat-boy-id"
   ]
}
```
## Videos
### POST /video: \
Creates a video entity in the database

Params:
| Name | Type                     | required | Description            |
|------|--------------------------|----------|------------------------|
| key  | String                   |  &#9745; | Access key of admin permission level  |

Body:
| Name     | Type                     | required | Description               |
|----------|--------------------------|----------|---------------------------|
| name     | String                   |  &#9745; | The name of the video    |
| type     | enum(talk, workshop, other) | &#9745; | The type of video   |
| url      | String                   | &#9745;   | The link to the video for embedding/sharing

Response:
A JSON-encoded copy of the entity which was created

Example request:
```
axios.post('/video', {
   key: 'super-secret-key',
   body: {
    name: "Kickoff video",
    type: "talk",
    url: "www.amazon.s3.com/egads/videos/kickoff"
  }
});
```

Example response:
```
{
   "id": "000000-0000-000000000",
   "name" : "Kickoff video", 
   "type" : "talk",
   "url" : "www.amazon.s3.com/egads/videos/kickoff"
}
```


### GET /video: \
Gets a video based on name

Params:
| Name | Type                     | required | Description            |
|------|--------------------------|----------|------------------------|
| key  | String                   |  &#9744; | Access key of admin permission level  |
| name     | String                   |  &#9744; | The name of the video    |
| type     | enum(talk, workshop, other) | &#9744; | The type of video   |
| url      | String                   | &#9744;   | The link to the video for embedding/sharing

Response:
A JSON-encoded copy of the entity which was requested

Example request:
```
axios.get('/video?name=kickoff-talk');
```

Example response:
```
{
   "id": "000000-0000-000000000",
   "name" : "Kickoff video", 
   "type" : "talk",
   "url" : "www.amazon.s3.com/egads/videos/kickoff"
}
```

## Games
### POST /game: \
Creates a game entity in the database

Params:
| Name | Type                     | required | Description            |
|------|--------------------------|----------|------------------------|
| key  | String                   |  &#9745; | Access key of admin permission level  |

Body:
| Name     | Type                     | required | Description               |
|----------|--------------------------|----------|---------------------------|
| name     | String                   |  &#9745; | The name of the game    |
| url      | String                   | &#9745;   | The link to the game for embedding/sharing  |
| members | String[] | &#9745; | IDs for users that worked on this game

Response:
A JSON-encoded copy of the entity which was created

Example request:
```
axios.post('/game', {
   key: 'super-secret-key',
   body: {
    name: "super meat boy",
    url: "supermeatboy.io",
    members: [
       "jankins-id",
       "raymond-id"
    ]
  }
});
```

Example response:
```
{
   "id": "000000-0000-000000000",
   "name" : "super meat boy", 
   "url" : "supermeatboy.io"
   "members" : [
      "jankins-id",
      "raymond-id"
   ]
}
```


### GET /game: \
Gets a game based on name

Params:
| Name | Type                     | required | Description            |
|------|--------------------------|----------|------------------------|
| key  | String                   |  &#9744; | Access key of admin permission level  |
| name     | String                   |  &#9744; | The name of the game    |
| url      | String                   | &#9744;   | The link to the game for embedding/sharing  |
| members | String[] | &#9744; | IDs of users that worked on this game

Response:
A JSON-encoded copy of the entity which was requested

Example request:
```
axios.get('/game?name=super-meat-boy');
```

Example response:
```
{
   "id": "000000-0000-000000000",
   "name" : "super meat boy", 
   "url" : "supermeatboy.io"
   "members" : [
      "jankins-id",
      "raymond-id"
   ]
}
```

