
    document.getElementById("registroForm").addEventListener("submit", function(e) {
      e.preventDefault();

      // Validación adicional del teléfono
      const telRegex = /^\d{3} \d{2} \d{2} \d{2}$/;
      const telefono = document.getElementById("telefono").value;
      if (!telRegex.test(telefono)) {
        alert("Teléfono no tiene el formato correcto (ej: 123 45 67 89)");
        return;
      }

      document.getElementById("librosSection").classList.remove("hidden");
      alert("Cuenta creada correctamente. Ahora puedes seleccionar un libro.");
    });

    function calcularPrecio() {
      const precio = parseFloat(document.getElementById("precio").value);
      const iva = parseFloat(document.querySelector('input[name="iva"]:checked').value);

      if (isNaN(precio)) {
        alert("Por favor, introduce un precio válido.");
        return;
      }

      const total = (precio * (1 + iva)).toFixed(2);
      document.getElementById("resultado").value = `$${total}`;
    }
