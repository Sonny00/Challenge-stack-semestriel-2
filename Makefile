# Démarrage du projet 

start:
	$(shell cd backend && skaffold dev)


# Arrêt du projet 

stop: 
	docker-compose down  