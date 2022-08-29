import { Button, Flex, Text } from "@chakra-ui/react";
import { memo, useState, ReactNode, useCallback } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

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

  return (
    <Flex direction="column" w="100%" justify="center" align="center" p="2rem">
      <Flex
        align="center"
        bg="rgba.black"
        p="1rem"
        justify="space-between"
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
      </Flex>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </Flex>
  );
};

export default memo(SinglePagePDF);
