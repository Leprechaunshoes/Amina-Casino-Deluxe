const slotItems = ['🍒', '🍊', '🍉', '⭐', '🍀', '🍎', '💎', '🍋', '💰'];
const spinBtn = document.getElementById('spinBtn');
const resultDiv = document.getElementById('result');

function getRandomSlotItem() {
    return slotItems[Math.floor(Math.random() * slotItems.length)];
}

function spinSlots() {
    // Randomly pick items for the slots
    const slot1 = getRandomSlotItem();
    const slot2 = getRandomSlotItem();
    const slot3 = getRandomSlotItem();

    // Display the slot items
    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    // Check if the slots match
    if (slot1 === slot2 && slot2 === slot3) {
        resultDiv.textContent = '🎉 You Win! 🎉';
    } else {
        resultDiv.textContent = 'Try Again!';
    }
}

spinBtn.addEventListener('click', spinSlots);