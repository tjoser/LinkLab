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
  useDisclosure,
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
    <div className="w-full max-w-md mx-auto">
      {/* Card Container */}
      <Card
        
        className="h-[400px] shadow-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden relative group"
      >
        {/* Header */}
        <CardHeader className="absolute z-10 top-4 left-4 flex flex-col items-start space-y-2">
          <span className="text-xs text-white uppercase font-bold tracking-widest bg-indigo-600 px-2 py-1 rounded-full shadow-md">
            {theme}
          </span>
          <h4
  className="text-2xl text-white font-extrabold leading-tight"
  style={{
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
  }}
>
  {title}
</h4>

        </CardHeader>

        {/* Image */}
        <Image
          removeWrapper
          alt="Hackathon banner"
          className="z-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          src={image}
        />

        {/* Footer */}
        <CardFooter className="absolute bg-gradient-to-t from-black/80 via-black/30 to-transparent bottom-0 w-full z-10 flex justify-between items-center p-4">
          <div>
            <p className="text-sm text-gray-200 font-light"  style={{
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
  }}>{date}</p>
          </div>
          <Button
            className="text-sm font-semibold px-6 py-2"
            color="primary"
            radius="full"
            size="md"
            onClick={onOpen}
          >
            Register Now
          </Button>
        </CardFooter>
      </Card>

      {/* Modal for Registration */}
      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        className="rounded-xl bg-white shadow-2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* Modal Header */}
              <ModalHeader className="flex flex-col gap-2 text-gray-800">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm text-gray-500">Register now to secure your spot!</p>
              </ModalHeader>

              {/* Modal Body */}
              <ModalBody className="space-y-6">
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  className="w-full"
                />
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  className="w-full"
                />
              </ModalBody>

              {/* Modal Footer */}
              <ModalFooter className="flex justify-end gap-3">
                <Button
                  color="secondary"
                  variant="flat"
                  onPress={onClose}
                  className="px-4 py-2 text-sm"
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  className="px-4 py-2 text-sm"
                >
                  Register
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
