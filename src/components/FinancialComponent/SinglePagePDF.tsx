import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { memo, useState, ReactNode, useCallback } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdDownload,
} from "react-icons/md";
import { pdfPageStyle } from "../../styles";

const SinglePagePDF = ({ pdf }: { pdf: string }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState<ReactNode>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = useCallback((offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }, []);

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const downloadPDF = () => {
    fetch(pdf).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Demonstrações financeiras 2019, 2020 e 2021";
        alink.click();
      });
    });
  };

  return (
    <Flex direction="column" w="100%" justify="center" align="center" p="2rem">
      <Button
        mb="1.5rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="brand.700"
        color="white"
        transition="all 0.5s"
        _hover={{
          backgroundColor: "brand.800",
        }}
        _focus={{}}
        _active={{}}
        onClick={downloadPDF}
      >
        <Text>Download PDF</Text>
        <Icon as={MdDownload} />
      </Button>
      <Box
        display={pdfPageStyle}
        alignItems="center"
        bg="rgba.black"
        p="1rem"
        justifyContent="space-between"
        w="18rem"
        mb="1rem"
        borderRadius="1rem"
      >
        <Button
          bg="brand.700"
          transition="all 0.5s"
          onClick={previousPage}
          _hover={{
            backgroundColor: "brand.800",
          }}
          _focus={{}}
          _active={{}}
        >
          <MdArrowBackIosNew color="white" />
        </Button>
        <Text color="white" fontWeight="bold">
          Página {pageNumber || (numPages ? 1 : "--")} de {numPages || "--"}
        </Text>
        <Button
          bg="brand.700"
          transition="all 0.5s"
          onClick={nextPage}
          _hover={{
            backgroundColor: "brand.800",
          }}
          _focus={{}}
          _active={{}}
        >
          <MdArrowForwardIos color="white" />
        </Button>
      </Box>
      <Box display={pdfPageStyle}>
        <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </Box>
    </Flex>
  );
};

export default memo(SinglePagePDF);
