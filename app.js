const edad = prompt("DNI en mano!");

if (edad > 60) {
  console.log("Lo siento, estás muy viejo, vay a mimir.");
} else if (edad >= 18) {
  console.log("Pase!");
} else if (edad >= 16) {
  const tieneTutor = prompt("Viniste con un tutor pichon/a? (responde sí o no)").toLowerCase();

  if (tieneTutor === "sí") {
    console.log("Puedes pasar con tu tutor pichon");
  } else {
    console.log("Solo/a, ni a gancho!");
  }
} else {
  console.log("So muy chiquito, vaya jugar minecraft");
}