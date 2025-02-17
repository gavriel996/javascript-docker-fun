.PHONY: start full stop clean build start-docker-compose delete-docker-image run-on-basic-container-test

start: start-docker-compose

full: build start-docker-compose

start-docker-compose:
	cd backend ;\
    docker compose up -d

clean: stop delete-docker-image

stop:
	cd backend ;\
	docker compose down

delete-docker-image:
	docker rmi backend:backend

build:
	cd backend ;\
	docker build -t backend:backend .

run-on-basic-container-test:
	docker run --name backend --rm -p 3000:3000 backend:backend
