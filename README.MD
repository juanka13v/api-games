# Api Games

Base URL: https://api-games-ar.herokuapp.com/api/v1

All requests are **GET** requests and go over http. All responses will return data in json.

> You can access the list of games by using the **/games** endpoint.

---
```
GET "https://api-games-ar.herokuapp.com/api/v1/games"
```

>if the response is correct status will be **"success"**, and it will return the games in **"data"** into an array.

```
{
    "status": "success",
    "data":[...] //games
}
       
```

>if the response is bad, the status will be **"error"**, and will return a **"message"** with the error into an object.

```
{
    "status": "error",
    "message":{...} //error
}  
```

## Game Schema

>You can get a single game by adding the id as a parameter: **/game/6227cc0737934d26dc331503**

```
{
    "_id": "6227cc0737934d26dc331503",
    "title": "Hollow Knight",
    "thumbnail": "http://res.cloudinary.com/df0mkte1v/image/upload/v1646840087/if4ymopz9xlauybo3kq9.jpg",
    "short_description": "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
    "description": "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
    "genre": "metroidvania",
    "publisher": "team cherry",
    "release_date": "2017-02-24T03:00:00.000Z",
    "platform": [
        "pc",
        "switch",
        "ps4",
        "xbox one"
    ],
    "franchise": "any",
    "developer": "team cherry",
    "minimum_system_requirements": {
        "os": "Windows 7 (64bit)",
        "processor": "Intel Core 2 Duo E5200",
        "graphics": "GeForce 9800GTX",
        "storage": "9 GB",
    },
    "screenshots": [
        "http://res.cloudinary.com/df0mkte1v/image/upload/v1646840089/vzlrhowxe1r1f5dq1b45.jpg",
        "http://res.cloudinary.com/df0mkte1v/image/upload/v1646840091/yvfyvit4xq1xadcg89uz.jpg",
        "http://res.cloudinary.com/df0mkte1v/image/upload/v1646840092/unagdhk2i2hkneqdsaen.jpg"
    ]
}
```

| Syntax | Type | Description|
| ----------- | ----------- | ----------- |
| _id | String | The id of the game. |
| Title | String | The name of the game.|
| Thumbnail | String(URL) | Link to the game's thumbnail. |
| Short Description | String | Short description of the game. |
| Description | String | Description of the game.
| Genre	| String | The genre of the game.
| Release Date | String(date) |The release date of the game
| Platform | Array | The platforms of the game.
| Franchise | String | The franchise of the game. If it does not belong to a franchise it will return "any"
| Publisher | String | The publisher of the game.
| Developer	| String | The developer of the game.
| minimum system requirements | Object | The "os", "processor", "graphics" and "storage" of the game.
| Screenshots | Array (URL)	| Links to images of the game


---

## Filters Games

You can also include filters in the URL by including additional query parameters. To start filtering add a **?** followed by the query **&lt;query&gt;=&lt;value&gt;**. If you want to chain several queries in the same call, use & followed by the query.

>For example, if you want to filter by genre, just add **?genre=shooter** to the URL.

Available parameters:

- **genre:** *filter by the genre.*
- **platform:** *filter by the platform*
- **franchise:** *filter by the franchise*


