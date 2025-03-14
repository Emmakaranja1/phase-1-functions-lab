// Code your solution in this file!

// Constants
const HEADQUARTERS_BLOCK = 42; // The block location of headquarters
const FREE_DISTANCE = 400; // First 400 feet are free
const BASE_FARE = 2; // Fare rate per foot after the free distance
const MAX_DISTANCE = 2500; // Maximum distance allowed to travel
const OVERCHARGE_DISTANCE = 2000; // Distance above which a flat fee is charged
const FLAT_FARE = 25; // Flat fare for distances over 2000 feet

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - HEADQUARTERS_BLOCK);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264; // 1 block = 264 feet
}

// Function to calculate distance travelled in feet between two block numbers
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; // 1 block = 264 feet
}

// Function to calculate fare price based on distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= FREE_DISTANCE) {
    return 0; // Free if within 400 feet
  } else if (distance > FREE_DISTANCE && distance <= OVERCHARGE_DISTANCE) {
    // Calculate fare based on distance over free feet
    const overDistance = distance - FREE_DISTANCE;
    return overDistance * BASE_FARE / 100; // Convert cents to dollars
  } else if (distance > OVERCHARGE_DISTANCE && distance <= MAX_DISTANCE) {
    return FLAT_FARE; // Flat fare for distances over 2000 feet
  } else {
    return 'cannot travel that far'; // Invalid distance, over maximum allowed
  }
}

