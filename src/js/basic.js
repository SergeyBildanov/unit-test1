export default function isHealthy({name, health}) {
  if(health > 50){
    return name + "healthy";
  }
  if(health > 15){
    return name + "wounded";
  }
  return name + "critical";
}
