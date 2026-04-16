// Selección con métodos modernos
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");
const counter = document.querySelector("#counter");

// Contador
let pendingTasks = 0;

// Actualizar contador
function updateCounter() {
    counter.textContent = pendingTasks;
}

// Agregar tarea
addBtn.addEventListener("click", () => {
    const text = input.value.trim();

    // Validación
    if (text === "") {
        alert("No puede agregar tareas vacías");
        return;
    }

    // Crear elementos
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btnContainer = document.createElement("div");

    span.textContent = text;
    btnContainer.classList.add("task-buttons");

    // Botón completar
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            pendingTasks--;
        } else {
            pendingTasks++;
        }

        updateCounter();
    });

    // Botón eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";

    deleteBtn.addEventListener("click", () => {
        if (!li.classList.contains("completed")) {
            pendingTasks--;
        }

        li.remove();
        updateCounter();
    });

    // Armar estructura
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnContainer);

    list.appendChild(li);

    // Reset input
    input.value = "";

    // Actualizar contador
    pendingTasks++;
    updateCounter();
});