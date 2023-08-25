import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardsSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardsSkeleton;
