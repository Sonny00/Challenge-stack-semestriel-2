# Démarrage du projet 

start:
	$(shell cd backend && skaffold dev --tail)



# Arrêt du projet 

stop: 
	docker-compose down  