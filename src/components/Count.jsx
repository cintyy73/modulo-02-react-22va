import { Button, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );
  const [title, setTitle] = useState("Tilte");

  console.log("antes del renderizado");

  useEffect(() => {
    console.log("useEffect");
    localStorage.setItem("count", JSON.stringify(count));
 
  }, [count]);

  console.log("despues del renderizado");
  return (
     
    
      <HStack className="card">
        <Button onClick={() => setCount((count) => count + 1)}>mas</Button>
        <Text>{count}</Text>
        <Button onClick={() => setCount((count) => count - 1)}>menos</Button>
        <Text>{title}</Text>
        <Button onClick={() => setTitle("New title")}>change title</Button>
      </HStack>

  );
}

export default Count;
