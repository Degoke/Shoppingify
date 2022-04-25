include ./shoppingify-server/.env

compile-env:
	node compile_env.js shoppingify-server shoppingify-web

start:
	docker compose up -d

stop:
	docker compose down

restart:
	${MAKE} stop
	${MAKE} start

rebuild:
	${MAKE} stop
	${MAKE} compile-env
	docker compose up -d --build

reset-all:
	${MAKE} stop
	${MAKE} compile-env
	docker compose up -d --build -V

remove-volumes:
	${MAKE} stop
	docker compose up -d -V