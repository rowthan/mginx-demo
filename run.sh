sudo mkdir -p files && \
currentDir=$(pwd) && \
sudo docker run --name mginx-demo9 -i -p 8888:8888 \
 -v $currentDir/local.js:/mginx/config/local.js \
 -v $currentDir/files/:/mginx-files/ \
rowthan/mginx