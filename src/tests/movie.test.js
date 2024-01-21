const  request  = require("supertest");
const application = require("../app");


id = 1 ;


//TEST ENDPOINT ACTORS
/********************************************************************/
/********************************************************************/
test("GET /actors Debe retornar un actor y un codigo 200", async () => {
    const response = await request(application).get("/actors");
    expect(response.statusCode).toBe(200);
});

test("POST /actors Debe crear el actor y un codigo 201", async () => { 
    const response = await request(application).post("/actors").send({
        firstName: "test",
        lastName: "test",
        nationality: "test",
        image: "test",
        birthday: "test"
    });
    expect(response.statusCode).toBe(201);
});

test(`PUT /actors/${id} Debe editar la informacion del actor y un codigo 200 y devuelva el resultado editado`, async () => {
    const response = await request(application).put(`/actors/${id}`).send({
        firstName: "testuno",
        lastName: "test",
        nationality: "test",
        image: "test",
        birthday: "test"
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.firstName).toBe("testuno");

});


test(`DELETE /movies/${id} Debe eliminar el actor y un codigo 200`, async () => {
    const response = await request(application).delete(`/actors/${id}`);
    expect(response.statusCode).toBe(204);

});
/********************************************************************/
/********************************************************************/




//TEST ENDPOINT GENRES
/********************************************************************/
/********************************************************************/
test("GET /genres debe retornar todos los generos y un codigo 200", async () => {
    const response = await request(application).get("/movies");
    expect(response.statusCode).toBe(200);
});

test("POST /genres debe crear el genero y un codigo 201", async () => {
    const response = await request(application).post("/genres").send({
        name: "test",
    });
    expect(response.statusCode).toBe(201);
});

test(`PUT /genres/${id} debe editar la informacion del genero y un codigo 200 y devuelva el resultado editado`, async () => {
    const response = await request(application).put(`/genres/${id}`).send({
        name: "testuno",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("testuno");
});

test(`DELETE /genres/${id} debe eliminar el genero y un codigo 200`, async () => {
    const response = await request(application).delete(`/genres/${id}`);
    expect(response.statusCode).toBe(204);
});
/********************************************************************/
/********************************************************************/




//TEST ENDPOINT DIRECTORS
/********************************************************************/
/********************************************************************/
test("GET /directors debe retornar todos los directores y un codigo 200", async () => {
    const response = await request(application).get("/directors");
    expect(response.statusCode).toBe(200);
});

test("POST /directors debe crear el director y un codigo 201", async () => {
    const response = await request(application).post("/directors").send({
        firstName: "test",
        lastName: "test",
        nationality: "test",
        image: "test",
        birthday: "test"
    });
    expect(response.statusCode).toBe(201);
});

test(`PUT /directors/${id} debe editar la informacion del director y un codigo 200 y devuelva el resultado editado`, async () => {
    const response = await request(application).put(`/directors/${id}`).send({
        firstName: "testuno",
        lastName: "test",
        nationality: "test",
        image: "test",
        birthday: "test"
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.firstName).toBe("testuno");
});

test(`DELETE /directors/${id} debe eliminar el director y un codigo 200`, async () => {
    const response = await request(application).delete(`/directors/${id}`);
    expect(response.statusCode).toBe(204);
});
/********************************************************************/
/********************************************************************/


//TEST ENDPOINT MOVIES
/********************************************************************/
/********************************************************************/
test("GET /movies debe retornar todos los generos y un codigo 200", async () => {
    const response = await request(application).get("/movies");
    expect(response.statusCode).toBe(200);
});

test("POST /movies debe crear la pelicula y un codigo 201", async () => {
    const response = await request(application).post("/movies").send({
        name: "test",
        image: "test",
        synopsis: "test",
        releaseYear: "test",
    });
    expect(response.statusCode).toBe(201);
});

test(`PUT /movies/${id} debe editar la informacion de la pelicula y un codigo 200 y devuelva el resultado editado`, async () => {
    const response = await request(application).put(`/movies/${id}`).send({
        name: "testuno",
        image: "test",
        synopsis: "test",
        releaseYear: "test",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("testuno");
});

test(`DELETE /movies/${id} debe eliminar la pelicula y un codigo 200`, async () => {
    const response = await request(application).delete(`/movies/${id}`);
    expect(response.statusCode).toBe(204);
});

test(`POST /movies/${id}/actors debe retornar la informacion del actor de la pelicula y un codigo 200`, async () => {
    const response = await request(application).post(`/movies/${id}/actors`).send({
        actorId: 1
    });
    expect(response.statusCode).toBe(200);
    
});

test(`POST /movies/${id}/directors debe retornar la informacion del director de la pelicula y un codigo 200`, async () => {
    const response = await request(application).post(`/movies/${id}/directors`).send({
        directorId: 1
    });
    expect(response.statusCode).toBe(200);
    
});


test(`POST /movies/${id}/genres debe retornar la informacion del genero de la pelicula y un codigo 200`, async () => {
    const response = await request(application).post(`/movies/${id}/genres`).send({
        genreId: 1
    });
    expect(response.statusCode).toBe(200);
})