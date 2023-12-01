# Rec. Primer Parcial - 28/11/2023

**GOTO Game JAM - Sistema de Votación de Jueces**

**Contexto**:

GOTO Game JAM es una competencia anual donde equipos de desarrolladores se reúnen para crear un videojuego en un plazo de 48 horas. Como parte del proceso, un grupo de jueces evalúa y califica los videojuegos en varias categorías. Se te ha contratado para desarrollar el sistema de votación que permita a estos jueces emitir sus calificaciones.

Las entidades ya establecidas son:

- **Judges** con campos:
    - _id (identificador único)
    - name
- **Games** con campos:
    - _id (identificador único)
    - name
    - genre (nombre del genero del juego)
    - members (lista con los nombres de los participantes que hicieron el juego)
    - edition (indica el año o edición de la GOTO Game JAM).
    - totalPoint (son la sumatoria de todos los puntos obtenidos por los votos de los jueces)

Tu tarea es diseñar e implementar el sistema que permita registrar las votaciones de los jueces en las siguientes categorías:

1. Jugabilidad
2. Arte
3. Sonido
4. Afinidad a la temática

---

**Instrucciones**:

1. **Modelo de Datos**:
    
    La entidad de **Votes**. debe tener la siguiente estructura
    
    - _id
    - judgue {_id, name}
    - game {_id, name}
    - points: {gameplay, art, sound, theme)

1. **Acciones que debe permitir el API**:
    - Un endpont donde pueda crear un voto, se enviara el siguiente recurso:
        
        ```jsx
        {
        	"judge_id": Numero,
        	"game_id": Numero,
        	"gameplay": Numero,
        	"art": Numero,
        	"sound": Numero,
        	"theme": Numero
        }
        ```
        
        Se debe utilizar embebed para guardar el nombre del juego y el nombre del juez
        
        Se debe actualizar los puntos totales en el documento del juego al cual se le esta realizado dicha votación (acumulando todos los puntos de las categorías)
        
    - Un endpont que a partir de una edición me muestre todos los juegos de esa edición ordena de menor puntuación a mayor puntuación (utilizar la función sort de mongodb, no realizar subconsultas)
    - CRUD de los juegos
        - En la creación de un nuevo juego se debe poder enviar solo el siguiente recurso:
            
            ```jsx
            {
            	"name": String,
            	"genre": String,
            	"members": Array[String],
            	"edition": Number
            }
            ```
            
            Los puntos totales siempre empiezan en cero
            
        - La modificación solo cambiara los datos pero no se espera que se modifique los puntos totales
        - No se permite eliminar un juego (no debería existir un endpoint para esto)
        - Obtener un juego a partir de su ID
        - Obtener todos los juegos
            - Se debe podre filtrar por edición y genero (query params)
2. **Consideraciones**:
    - No realizar ningún tipo de validación, ni middleware, ni esquemas ni nada de eso.
    - Se asume que las puntuaciones serán entre 1 y 10.
    - Un juez puedo no votar un juego, pero si realiza la votación siempre es para cada una de las categorías.
3. **Que se evaluara**:
    - Correcto uso de la división de responsabilidades (routes, controllers, services).
    - Correcto uso de los filtros de MongoDB.
    - Correcto uso del **API del Driver Nativo** de MongoDB (No utilizar un ORM).
    - Correcto uso de las reglas de un **API Rest** (URI, Estados, JSON, Verbos).
    - Que no realicen acciones o tareas que no se piden en el enunciado.
    - Uso correcto de las estrategias **Embebed** y **Reference** para realizar las relaciones entre las entidades en una base de datos no relacional.
    - Correcto nombramiento de los endpoint para realizar las tareas solicitadas.
    - Uso correcto del API de **Express JS.**
    - Correcto uso de **ECMAScript** modules.
    - Recuerden que hay cosas que las debe resolver la base de datos y otras que las debe resolver el servicio.
    - **Se deben respetar tanto las estructuras como los nombres de los recursos existentes**

---
