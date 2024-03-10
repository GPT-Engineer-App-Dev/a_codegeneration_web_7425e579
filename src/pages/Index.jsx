import React, { useState } from "react";
import { Box, Flex, Heading, Input, Button, Textarea, useToast, Image } from "@chakra-ui/react";
import { FaCode, FaCopy } from "react-icons/fa";

const Index = () => {
  const [language, setLanguage] = useState("javascript");
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const toast = useToast();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleCodeGeneration = () => {
    // Here, you would call an API or use a code generation library
    // to generate code based on the prompt and language
    const generatedCode = `
      // This is a placeholder for the generated code
      console.log('Hello, World!');
    `;
    setGeneratedCode(generatedCode);
    toast({
      title: "Code generated",
      description: "The code has been generated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast({
      title: "Code copied",
      description: "The code has been copied to your clipboard.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box bg="gray.800" p={6} rounded="md" boxShadow="lg" maxWidth="800px" width="100%">
        <Heading color="white" mb={6}>
          Code Generation
        </Heading>
        <Flex alignItems="center" mb={4}>
          <label htmlFor="language" style={{ color: "white", marginRight: "8px" }}>
            Language:
          </label>
          <select id="language" value={language} onChange={handleLanguageChange} style={{ marginRight: "16px" }}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
          <Button colorScheme="blue" onClick={handleCodeGeneration}>
            <FaCode style={{ marginRight: "8px" }} />
            Generate Code
          </Button>
        </Flex>
        <Textarea placeholder="Enter your prompt here..." value={prompt} onChange={handlePromptChange} mb={4} height="200px" />
        <Flex alignItems="center" justifyContent="space-between">
          <Heading size="md" color="white">
            Generated Code:
          </Heading>
          <Button colorScheme="green" onClick={handleCopyCode}>
            <FaCopy style={{ marginRight: "8px" }} />
            Copy Code
          </Button>
        </Flex>
        <Box bg="gray.700" p={4} rounded="md" mt={4} overflowX="auto">
          <pre style={{ color: "white" }}>{generatedCode}</pre>
        </Box>
        <Box mt={8} textAlign="center">
          <Image src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZ2VuZXJhdGlvbiUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3MTAwMjEwODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Code Generation Illustration" maxWidth="400px" mx="auto" />
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
