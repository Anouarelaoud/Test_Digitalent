## Setup && Run Front_end using docker

```
cd frontend
docker build -t front_end .
docker run -p 8080:80 front_end
```

### Setup && Run Front_end

```
cd front_end
npm install
npm run serve
```

### Setup && Run Back_end

```
cd back_end
npm install
node index.js
```
