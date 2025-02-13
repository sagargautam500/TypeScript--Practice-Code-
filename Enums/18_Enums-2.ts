// 5️⃣ Enums in Functions
// Enums can make function parameters more readable.
enum TrafficLight {
  Red,
  Yellow,
  Green
}

function checkLight(light: TrafficLight) {
  if (light === TrafficLight.Red) {
    console.log("STOP 🚦");
  } else if (light === TrafficLight.Yellow) {
    console.log("Slow Down ⚠️");
  } else {
    console.log("Go 🚗");
  }
}
checkLight(TrafficLight.Green); // Output: "Go 🚗"
// ✔️ This prevents errors and makes code more meaningful.


// 5️⃣ Enum Type Annotation in Function Overloading
// Enums can be used in function overloading.
enum NotificationType {
  Email,
  SMS
}

function sendNotification(type: NotificationType, message: string): void;
function sendNotification(type: string, message: string): void; // Overloaded signature

function sendNotification(type: NotificationType | string, message: string): void {
  console.log(`Sending ${typeof type === "number" ? NotificationType[type] : type} notification: ${message}`);
}

sendNotification(NotificationType.Email, "Welcome to our platform!");
// Output: Sending Email notification: Welcome to our platform!

sendNotification("Push", "New message received!");
// Output: Sending Push notification: New message received!



// 6️⃣ Enum in an Object
// Enums can be used inside objects.
enum OrderStatus {
  Pending,
  Shipped,
  Delivered
}

let order = {
  id: 101,
  status: OrderStatus.Shipped
};
console.log(order.status); // Output: 1
// ✔️ This ensures status can only be Pending, Shipped, or Delivered.

