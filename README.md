
# Api alumnos
Desplegada [aquí](https://ingwebmongo.herokuapp.com)


## Rutas

```/students```
GET: Obtiene a todos los estudiantes
POST: Crea un estudiante:
{
    "grades": [
     number
    ],
    "id": "string",
    "documentType": "string",
    "name": "string",
    "lastName": "string"
  }
DELETE: Borra todos los estudiantes
PUT: Actualiza todos los usuarios con un filtro dado:
{
	"filter": {
		"campo": "filtro"	
	},
	"set": {
		"campo a cambiar": "nuevo valor"
	}
}

```/students/grades```
GET: Obtiene el promedio de la clase

```/:id```
GET: Obtiene el usuario con id dado
PUT: Actualiza el usuario con id dado:
{
  "campos a cambiar": "nuevo valor"
}
DELETE: Borra usuario con el id dado