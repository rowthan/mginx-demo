sudo mkdir -p files && \
currentDir=$(pwd) && \
sudo docker run --name mginx-demo -i -p 8888:8888 \
 --network host \
 -v $currentDir/local.js:/mginx/config/local.js \
 -v $currentDir/files/:/mginx-files/ \
rowthan/mginx