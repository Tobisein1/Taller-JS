//1
let estudiantes = [
	{ nombre: "Laura", calificaciones: [93, 75, 88, 96] },
	{ nombre: "Sebastian", calificaciones: [85, 68, 74, 93] },
	{ nombre: "Miguel", calificaciones: [78, 26, 67, 54] },
	{ nombre: "Natalia", calificaciones: [65, 85, 76, 58] },
];

//2
estudiantes.forEach((mostrarEstudiantes) => {
	console.log(
		`${mostrarEstudiantes.nombre}: ${mostrarEstudiantes.calificaciones}`
	);
});

//2.2

function calcularPromedio(calificaciones) {
	let sum = calificaciones.reduce(
		(acumulador, calificacion) => acumulador + calificacion,
		0
	);
	let prom = sum / calificaciones.length;
	return prom.toFixed(2);
}

estudiantes.forEach((mostrarEstudiantes) => {
	let promedio = calcularPromedio(mostrarEstudiantes.calificaciones);
	/* console.log(`${mostrarEstudiantes.nombre}: promedio = ${promedio}`); */
});

//2.3
function obtenerMejorCalificacion(calificaciones) {
	return Math.max(...calificaciones);
}

//2.4
function obtenerPeorCalificacion(calificaciones) {
	return Math.min(...calificaciones);
}

estudiantes.forEach((mostrarEstudiantes) => {
	let mejor = obtenerMejorCalificacion(mostrarEstudiantes.calificaciones);
	let peor = obtenerPeorCalificacion(mostrarEstudiantes.calificaciones);

	/* console.log(
		`${mostrarEstudiantes.nombre}:  mejor calificación = ${mejor}, peor calificación = ${peor}`
	); */
});

//2.5
function agregarCalificacion(nombreEstudiante, nuevaCalificacion) {
	let estudiante = estudiantes.find((i) => i.nombre === nombreEstudiante);
	if (estudiante) {
		estudiante.calificaciones.push(nuevaCalificacion);
		console.log(
			`Calificación ${nuevaCalificacion} agregada a ${nombreEstudiante}.`
		);
	} else {
		console.log(
			`El estudiante ${nombreEstudiante} no se encuentra en el curso.`
		);
	}
}

/* agregarCalificacion("Laura", 76);

console.log(estudiantes); */

//2.6

function eliminarUltimaCalificacion(nombreEstudiante) {
	let estudiante = estudiantes.find((i) => i.nombre === nombreEstudiante);
	if (estudiante) {
		if (estudiante.calificaciones.length > 0) {
			let elim = estudiante.calificaciones.pop();
			console.log(
				`Se eliminó la calificación "${elim}" del/la estudiante ${nombreEstudiante}.`
			);
		} else {
			console.log(
				`El/La estudiante ${nombreEstudiante} no tiene calificaciones para eliminar.`
			);
		}
	} else {
		console.log(
			`El/La estudiante ${nombreEstudiante} no se encuentra en el curso.`
		);
	}
}

/* eliminarUltimaCalificacion("Laura"); */

//2.7
function filtrarEstudiantesAprobados(promedioMinimo) {
	return estudiantes.filter(
		(i) => calcularPromedio(i.calificaciones) >= promedioMinimo
	);
}

/* let aprobados = filtrarEstudiantesAprobados(60);
console.log(aprobados); */

//2.8
function ordenarEstudiantesPorNombre() {
	estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

/* ordenarEstudiantesPorNombre();
console.log(estudiantes); */

//2.9
function generarReporteIndividual(nombreEstudiante) {
	let estudiante = estudiantes.find((i) => i.nombre === nombreEstudiante);
	if (estudiante) {
		let promedio = calcularPromedio(estudiante.calificaciones);
		let mejor = obtenerMejorCalificacion(estudiante.calificaciones);
		let peor = obtenerPeorCalificacion(estudiante.calificaciones);

		console.log(`Reporte de el/la estudiante${nombreEstudiante}`);
		console.log(`- Calificaciones: ${estudiante.calificaciones}`);
		console.log(`- Promedio: ${promedio}`);
		console.log(`- Mejor calificación: ${mejor}`);
		console.log(`- Peor calificación: ${peor}`);
	} else {
		console.log(`Estudiante ${nombreEstudiante} no encontrado.`);
	}
}

/* generarReporteIndividual("Laura"); */

//3
function iniciarGestionCalificaciones() {
	let opcion = "";

	while (opcion !== "7") {
		opcion = prompt(
			"Menú de opciones:\n" +
				"1. Mostrar estudiantes\n" +
				"2. Agregar calificación\n" +
				"3. Eliminar última calificación\n" +
				"4. Mostrar estudiantes aprobados\n" +
				"5. Ordenar estudiantes por nombre\n" +
				"6. Generar reporte individual\n" +
				"7. Salir\n" +
				"Ingrese el número de su opción:"
		);

		switch (opcion) {
			case "1":
				estudiantes.forEach((e) =>
					console.log(`${e.nombre}: ${e.calificaciones}`)
				);
				break;

			case "2":
				let nombreAgregar = prompt("Ingrese el nombre del estudiante:");
				let nuevaCalif = parseFloat(prompt("Ingrese la nueva calificación:"));
				agregarCalificacion(nombreAgregar, nuevaCalif);
				break;

			case "3":
				let nombreEliminar = prompt("Ingrese el nombre del estudiante:");
				eliminarUltimaCalificacion(nombreEliminar);
				break;

			case "4":
				let minimo = parseFloat(
					prompt("Ingrese el promedio mínimo para aprobar:")
				);
				let aprobados = filtrarEstudiantesAprobados(minimo);
				console.log("Estudiantes aprobados:");
				aprobados.forEach((e) =>
					console.log(
						`${e.nombre}: promedio = ${calcularPromedio(e.calificaciones)}`
					)
				);
				break;

			case "5":
				ordenarEstudiantesPorNombre();
				console.log("Estudiantes ordenados alfabéticamente:");
				estudiantes.forEach((e) =>
					console.log(`${e.nombre}: ${e.calificaciones.join(", ")}`)
				);
				break;

			case "6":
				let nombreReporte = prompt("Ingrese el nombre del estudiante:");
				generarReporteIndividual(nombreReporte);
				break;

			case "7":
				console.log("Saliendo del programa...");
				break;

			default:
				console.log(
					"Opción no válida. Por favor ingrese un número del 1 al 7."
				);
		}
	}
}

iniciarGestionCalificaciones();
