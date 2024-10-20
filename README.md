# Civitai Fetcher

A Node.js project to fetch images and videos from Civitai.

## Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/civitai-fetcher.git
    cd civitai-fetcher
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure environment variables**

    Create a `.env` file in the root directory and add your Civitai API key:

    ```env
    CIVITAI_API_KEY=your_api_key_here
    ```

4. **Run the application**

    ```bash
    npm start
    ```

## Project Structure

- `src/`: Contains all source code.
  - `index.js`: Entry point of the application.
  - `config.js`: Configuration settings.
  - `civitaiClient.js`: Initializes the Civitai client.
  - `jobsHandler.js`: Handles job creation and status checking.
  - `utils.js`: Utility functions.
- `outputs/`: Directory where generated images/videos are saved.

## Customization

- **Change Input Parameters**: Modify `src/index.js` to change prompts, models, and other parameters.
- **Switch Output Type**: Set `outputType` to `'image'` or `'video'` in `src/index.js`.

## Notes

- Ensure that the `outputs` directory exists or is created automatically.
- Handle API rate limits and errors gracefully.
