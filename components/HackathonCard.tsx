'use client'; // Mark this component as a Client Component

import { 
  Card, 
  CardHeader, 
  CardFooter, 
  Image, 
  Button, 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Input, 
  useDisclosure 
} from "@nextui-org/react";

interface HackathonCardProps {
  title: string;
  date: string;
  theme: string;
  image: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ title, date, theme, image }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <Card 
        isFooterBlurred 
        className="h-[380px] shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
      >
        <CardHeader className="absolute z-10 top-4 left-4 flex flex-col items-start">
          <span className="text-sm text-gray-100 uppercase font-semibold tracking-wide">
            Theme
          </span>
          <h4 className="text-xl text-white font-bold leading-tight">
            {theme}
          </h4>
        </CardHeader>

        <Image
          removeWrapper
          alt="Hackathon banner"
          className="z-0 w-full h-full object-cover"
          src={image}
        />

        <CardFooter className="absolute bg-white/60 backdrop-blur-sm bottom-0 border-t border-gray-300 z-10 flex justify-between items-center p-4">
          <div>
            <p className="text-sm text-gray-800 font-medium">
              {date}
            </p>
            <p className="text-md text-gray-900 font-semibold truncate">
              {title}
            </p>
          </div>
          <Button
            className="text-sm font-medium px-4 py-2"
            color="primary"
            radius="full"
            size="sm"
            onClick={onOpen}
          >
            Register Now
          </Button>
        </CardFooter>
      </Card>

      <Modal
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
        className="rounded-lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-gray-900">
                Register for {title}
              </ModalHeader>
              <ModalBody className="space-y-4">
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  className="w-full"
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  className="w-full"
                />
              </ModalBody>
              <ModalFooter className="flex justify-end gap-2">
                <Button 
                  color="secondary" 
                  variant="flat" 
                  onPress={onClose}
                  className="px-4 py-2 text-sm"
                >
                  Close
                </Button>
                <Button 
                  color="primary" 
                  onPress={onClose}
                  className="px-4 py-2 text-sm"
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HackathonCard;
