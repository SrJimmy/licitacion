<p align="center">
  <img alt="Master build workflow status" src="https://img.shields.io/github/actions/workflow/status/srjimmy/licitacion/build.yml?branch=master">
  <img alt="License AGPL" src="https://img.shields.io/github/license/srjimmy/licitacion">
  <img alt="Master package.json version" src="https://img.shields.io/github/package-json/v/srjimmy/licitacion/master">
</p>


## 📈 Calculadora de baja anormal

Esta aplicación web permite calcular aquellos licitadores cuya
baja sea anormalmente desproporcionada en los procesos de licitación
pública de contratos mayores en España.

La Baja Anormal es una figura legal que se utiliza para determinar
si una oferta de un contrato público es anormalmente baja, lo que
puede indicar que la empresa contratista no está cumpliendo con
las normas laborales y sociales requeridas por el contrato.

Más información en el árticulo 85 del Real Decreto 1098/2001,
de 12 de octubre, por el que se aprueba el Reglamento general
de la Ley de Contratos de las Administraciones Públicas

https://boe.es/buscar/act.php?id=BOE-A-2001-19995&p=20180505&tn=1#a85

## Uso

Puedes utilizar esta aplicación de dos maneras:

### 1. Clonando el repositorio

~~~shell
git clone https://github.com/srjimmy/licitacion.git

npm install

npm run dev
~~~

### 2. Utilizando la imagen de Docker

~~~
docker run -d -p 80:80 ghcr.io/srjimmy/licitacion:latest
~~~

Después, podrás acceder a la aplicación a través de tu navegador en la dirección http://localhost.
