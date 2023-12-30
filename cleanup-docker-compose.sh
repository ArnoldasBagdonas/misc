#!/bin/bash

#chmod +x cleanup_all_docker.sh

# Stop and remove Docker Compose services
docker-compose down

# Stop and remove all containers
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

# Delete all images
docker rmi $(docker images -q)

# Delete all networks
docker network rm $(docker network ls -q)

# Delete all volumes
docker volume rm $(docker volume ls -q)

# Prune unused Docker objects
docker system prune --all --force

# Start Docker (add the appropriate command for your system)
#sudo systemctl start docker  # For systems using systemd
# OR
sudo service docker start    # For systems without systemd

