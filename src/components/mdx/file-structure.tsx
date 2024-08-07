"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight, File, Folder } from "lucide-react";

// Sample data (the files object)
const files = [
  {
    name: "src",
    type: "directory",
    text: "The source directory containing all the core code of the application.",
    children: [
      {
        name: "app",
        type: "directory",
        text: "Contains the main application code and logic.",
        children: [
          {
            name: "layout.tsx",
            type: "file",
            text: "Defines the layout structure for the application.",
          },
          {
            name: "page.tsx",
            type: "file",
            text: "The main entry point for the application's pages.",
          },
        ],
      },
      {
        name: "components",
        type: "directory",
        text: "Holds reusable UI components and custom components.",
        children: [],
      },
      {
        name: "db",
        type: "directory",
        text: "Manages database-related code including actions and queries.",
        children: [
          {
            name: "actions.ts",
            type: "file",
            text: "Contains database actions such as inserts, updates, and deletes.",
          },
          {
            name: "queries.ts",
            type: "file",
            text: "Stores database query functions for retrieving data.",
          },
        ],
      },
      {
        name: "lib",
        type: "directory",
        text: "Library directory for types, utilities, and other helper functions.",
        children: [
          {
            name: "constants.ts",
            type: "file",
            text: "Contains constant values that will be reued thorough the application",
          },
          {
            name: "types.ts",
            type: "file",
            text: "Contains type definitions for TypeScript or flow typing.",
          },
          {
            name: "utils.ts",
            type: "file",
            text: "Stores utility functions and helpers used across the application.",
          },
        ],
      },
      {
        name: "stores",
        type: "directory",
        text: "Manages state-related code, such as Redux, Zuztand or other state management libraries.",
        children: [],
      },
    ],
  },
  {
    name: "public",
    type: "directory",
    text: "The public directory containing static assets.",
    children: [
      {
        name: "images",
        type: "directory",
        text: "Contains image files used in the application.",
        children: [],
      },
    ],
  },
];

// Recursive component to render the file structure
const FileTree = ({ files, depth = 0 }) => {
  // State to track which directories are open
  const [openDirs, setOpenDirs] = useState({});

  // Function to toggle the open/close state of a directory
  const toggleDir = (path) => {
    setOpenDirs((prevOpenDirs) => ({
      ...prevOpenDirs,
      [path]: !prevOpenDirs[path],
    }));
  };

  // Function to recursively render the file structure
  const renderFiles = (files, path = "", depth = 0) => {
    return (
      <div style={{ paddingLeft: `${depth * 20}px`, listStyle: "none" }}>
        {files.map((file, index) => {
          const currentPath = `${path}/${file.name}`;
          return (
            <div key={index} className="pt-1 md:pt-3">
              {file.type === "directory" ? (
                <details open={openDirs[currentPath]}>
                  <summary
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default behavior to handle toggle manually
                      toggleDir(currentPath); // Toggle the open/close state of the directory
                    }}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "start",
                    }}
                  >
                    {/* Render chevron icon based on directory state */}
                    {openDirs[currentPath] ? (
                      <ChevronDown size={16} className="mt-[5px]" />
                    ) : (
                      <ChevronRight size={16} className="mt-[5px]" />
                    )}
                    <Folder size={16} className="mr-2 mt-[5px]" />

                    <span className="font-medium">{file.name}</span>
                    <span className="italic opacity-80 flex-1">
                      : {file.text}
                    </span>
                  </summary>
                  {/* Render children of the directory recursively */}
                  {file.children.length > 0 && (
                    <FileTree files={file.children} depth={depth + 1} />
                  )}
                </details>
              ) : (
                <div className="flex items-start">
                  <File size={16} className="mr-2 mt-[5px]" />
                  <span className="font-medium">{file.name}</span>
                  <span className="italic opacity-80 flex-1">
                    : {file.text}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return <>{renderFiles(files, "", depth)}</>;
};

// Main component to render the FileTree
const FileHierarchyViewer = () => {
  return (
    <div className="bg-muted rounded-xl px-3 pt-2 md:pt-0 pb-3">
      <FileTree files={files} />
    </div>
  );
};

export default FileHierarchyViewer;
