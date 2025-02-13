"use strict";
// 5️⃣ Enums in Functions
// Enums can make function parameters more readable.
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));
function checkLight(light) {
    if (light === TrafficLight.Red) {
        console.log("STOP 🚦");
    }
    else if (light === TrafficLight.Yellow) {
        console.log("Slow Down ⚠️");
    }
    else {
        console.log("Go 🚗");
    }
}
checkLight(TrafficLight.Green); // Output: "Go 🚗"
// ✔️ This prevents errors and makes code more meaningful.
// 5️⃣ Enum Type Annotation in Function Overloading
// Enums can be used in function overloading.
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Email"] = 0] = "Email";
    NotificationType[NotificationType["SMS"] = 1] = "SMS";
})(NotificationType || (NotificationType = {}));
function sendNotification(type, message) {
    console.log(`Sending ${typeof type === "number" ? NotificationType[type] : type} notification: ${message}`);
}
sendNotification(NotificationType.Email, "Welcome to our platform!");
// Output: Sending Email notification: Welcome to our platform!
sendNotification("Push", "New message received!");
// Output: Sending Push notification: New message received!
// 6️⃣ Enum in an Object
// Enums can be used inside objects.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
let order = {
    id: 101,
    status: OrderStatus.Shipped
};
console.log(order.status); // Output: 1
// ✔️ This ensures status can only be Pending, Shipped, or Delivered.
