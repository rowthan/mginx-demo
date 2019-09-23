# mkdir /opt/mginx/
sudo mkdir -p /opt/mginx/files/ && sudo docker run --name mginx-demo3 -i -p 8888:8888 -v ~/local.js:/mginx/config/local.js -v /opt/mginx/files/:/mginx-files/  rowthan/mginx