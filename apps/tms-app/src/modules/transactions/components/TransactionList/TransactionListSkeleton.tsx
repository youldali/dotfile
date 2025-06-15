import {
  Table,
  Flex,
  SkeletonText,
} from '@chakra-ui/react';

export const TransactionListSkeleton = () => {
  return (
      <Table.Root colorPalette="red" striped interactive>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Transaction ID</Table.ColumnHeader>
            <Table.ColumnHeader>From</Table.ColumnHeader>
            <Table.ColumnHeader>To</Table.ColumnHeader>
            <Table.ColumnHeader>Amount</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Array.from({length: 5}).map((_, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                <SkeletonText noOfLines={1} />
              </Table.Cell>
              <Table.Cell>
                <SkeletonText noOfLines={1} />
              </Table.Cell>
              <Table.Cell>
                <SkeletonText noOfLines={1} />
              </Table.Cell>
              <Table.Cell>
                <SkeletonText noOfLines={1} />
              </Table.Cell>
              <Table.Cell>
                <SkeletonText noOfLines={1} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
  );
};
