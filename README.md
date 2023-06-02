# Consumir servicios REST con Angular.
Resumen general del los objetivos del proyecto:

- Integrar el módulo HttpClient para realizar una llamada GET y obtener datos de Empleados 👷🏻‍♂️.
- Crear un servicio para integrar las llamadas a la API 😶‍🌫️.
- Diseñar el modelo de datos para almacenar el contenido devuelto 🛢️.
- Definir una estructura de proyecto escalable y hacer uso de los módulos de Angular 📊.
- Programación reactiva con RxJS y observables de las llamadas HTTP 👨🏻‍💻.

## Modulos en Angular(NgModule) ⭐
Las apps Angular son modulares, los módulos en Angular representan una agrupación lógica de componentes y elementos relacionados entre sí funcionalmente.

Todas las apps en Angular tienen como mínimo una clase `@NgModule`, `[src/app/app.module.ts]` contiene la definición del módulo raíz que se llama ***AppModule***, este a su vez puede hacer referencia a módulos hijo de forma jerárquica y con múltiples niveles de anidación unos dentro de otros.

## Descripción del metadata de un módulo⭐

Un módulo está definido por una clase decorada con `@NgModule()`. El decorador `@NgModule()` es una función que recibe un objeto con el metadata. Algunas de sus propiedades:

- **declarations**: Los componentes, directivas y pipes que forman parte de este módulo.
- **exports**: Define los elementos que son visibles y usables en las plantillas de componentes de otros módulos.
- **imports**: Otros módulos que son necesarios que son necesarios aquí.
- **providers**: Servicios que aporta este módulo a la colección global de servicios.
- **bootstrap**: La vista o componente raíz de nuestra app que contiene el resto de vistas.

Este el código de `[src/app/app.module.ts]` recién creado el proyecto:
```typescript 
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

## Crear un módulo ⭐
Una vez lanzado este comando en nuestro proyecto, dentro de la carpeta `[src/app]` se crea un directorio con el mismo nombre del módulo generado. Dentro encontraremos además el archivo con el código del módulo.

```typescript
ng generate module clientes
 ```
El resultado es la creación del fichero `clientes/clientes.module.ts` con la declaración y decoración del módulo ChuckModule.

## Configuración del módulo ⭐
Para poder usar el componente en el resto de la aplicación agrego al exports el componente que quiero usar desde otros módulos.

> [src/app/clientes/cliente.module.ts]
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerfraseComponent } from "./componentes/verfrase/verfrase.component";


@NgModule({
  declarations: [VerfraseComponent],
  imports: [
    CommonModule
  ],
  exports: [VerfraseComponent]
})
export class ClientesModule { }

```
## Importar el nuevo módulo en la aplicación principal ⭐
```typescript
import { ClientesModule } from './clientes/clientes.module';
```
Y en el decorador `@NgModule`:
```typescript
imports: [
    BrowserModule,
    HttpClientModule,
    ClientesModule
  ]
```
## Modelo de datos ⭐

El modelo de datos contiene las clases necesarias para representar los datos recibidos en las llamadas a la API, en este ejemplo concreto sólo contiene un interfaz TypeScript donde almacenamos la frase recibida y el resto de campos, en un futuro si se ampliase la información que puede proveer la API podemos añadir nuevos modelos de datos.

Creo la clase TypeScript usando el siguiente comando:

```typescript
ng generate class clientes/modelos/frase

```
Defino la interfaz con sus atributos:

```typescript
export interface Frase {
  empno: string; // ID de empleado
  ename: string; //Nombre de empleado
  job: string; // ID de empleo
  mgr: string; // ID de mgr
}
```
## HttpClient ⭐
Angular proporciona el módulo **HttpClient** para realizar llamadas HTTP (`@angular/common/http`). Algunas de sus características: API RxJS `Observable`, devuelve objetos con tipo para las peticiones o respuestas, gestión de errores, etc.

Para configurar el nuevo módulo añadimos en [src/app/app.module.ts]:
>import { HttpClientModule } from "@angular/common/http";

## Crea un servicio para encapsular las llamadas a la API ⭐

Lo ideal es usar un servicio para centralizar las llamadas al servidor, de esta forma el resto de la aplicación se abstrae del origen de datos y basta con modificar o ampliar el servicio para adaptar la aplicación si se producen por ejemplo cambios en el protocolo de llamadas.
>ng g service clientes/servicios/api
```typescript
import { Injectable } from "@angular/core";
import { Frase } from "../modelos/frase";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private frase: Frase = { empno: "", ename: "", job: "", mgr: "" };
  private ClienteUrl = "https://apex.oracle.com/pls/apex/areli_arias/emp/hol/"; // URL to web api

  constructor(private http: HttpClient) {}

  public getFrase(): Observable<Frase> {
    return this.http.get<Frase>(this.ClienteUrl);
  }
}
```
## Librería RxJS y observables en Angular ⭐
Los métodos **observables** permiten intercambiar mensajes entre un publicador y los suscriptores, son de especial interés para la gestión de eventos y la programación asíncrona.

Los métodos observables son funciones **declarativas**, se definen para publicar valores pero no se ejecutan hasta que un consumidor se suscribe a ellas, desde ese momento recibe notificaciones hasta que finalice la función observable o finalice la suscripción de forma programada.

**RxJS** es una librería para la programación **reactiva** para programar de forma asíncrona o código basado en ***callbacks*** (un puntero a una función que se pasa como argumento a otra función)

### Instalación ⭐
En el raíz del proyecto instalamos el paquete rxjs-compat, la adaptación de ReactiveX para JavaScript.

```typescript
 npm install --save rxjs-compat
```
### Observable ⭐

Importamos la clase `Observable` en la cabecera de [src/app/clientes/servicios/api.service.ts]:

> import { Observable } from "rxjs";
Declaramos un nuevo método `getFrase()` que retorna un objeto de tipo `Frase` y es observable. En el cuerpo de la función realizamos la llamada GET al servidor con la URL como parámetro de la función `HttpClient.get()` también de tipo observable.

```typescript 
  public getFrase(): Observable<Frase> {
    return this.http.get<Frase>(this.ClienteUrl);
  }

```
 ## Componente con la vista ⭐

Creo un nuevo componente para crear la vista que muestra la frase:

> ng g c clientes/componentes/verfrase
Una instancia Observable sólo comienza a publicar valores cuando alguien se suscribe a el usando el método `subscribe()` de la instancia.

Edito el método `ngOnInit` en [src/app/componentes/verfrase/verfrase.component.ts], este método se suscribe al observable y recibe el objeto.

```typescript
 ngOnInit() {
    this.apiservice.getFrase().subscribe(frase => (this.frase = frase));
  }
```# ProyectoREST
