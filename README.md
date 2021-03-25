# Rick and Morty Challenge
##Episode Locations Backend

Este repositorio contiene el artefacto serverless usado como backend del ítem **Episode Locations** del [desafío Rick and Morty](https://www.notion.so/Rick-and-Morty-Challenge-84a1b794dc09429fb3178c2a24e7c217 "desafío Rick and Morty") de Chipax.
### Características

- Endpoint AWS Gateway `GET /chipax-challenge/episode-locations/` que obtiene un match entre el listado de episodios y los distintos orígenes (location) de los personajes del episodio.
- Endpoint AWS Gateway `GET /chipax-challenge/episode-locations/{page}` que obtiene un listado similar al endpoint anterior, pero considerando la paginación de la API

### Requerimientos previos

Se requiere una cuenta AWS para la instalación y la respectiva configuración del Serverless CLI con usuario IAM que tenga permisos para creación de objetos en API Gateway y Lambda.

## Instrucciones de despliegue
Sobre la raíz del repositorio ejecutar los siguientes comandos:
```bash
npm install
serverless deploy
```
