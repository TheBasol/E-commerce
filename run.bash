# Solo se utiliza si algún puerto llegase a estar ocupado, "limpia y restable el puerto"
pid=`lsof -t -i :8000 -s TCP:LISTEN`
sudo kill -9 ${pid}
npm run server