import sys

def simulate_ml_verification(image_filename):
    # Simulate processing the image
    print(f"Processing image: {image_filename}")
    
    # Simulate ML prediction
    if "verified" in image_filename:
        verification_result = "Verified"
    else:
        verification_result = "Not Verified"
    
    return verification_result

if __name__ == "__main__":
    # if len(sys.argv) != 2:
    #     print("Usage: python simulate_ml.py <image_filename>")
    #     sys.exit(1)
    
    image_filename = sys.argv[1]
    verification_result = simulate_ml_verification(image_filename)
    print(f"Verification Result: {verification_result}")


# # print(sys.argv[1])
# # print(sys.argv[2])
# print("Hello World")

    # return "helo world"