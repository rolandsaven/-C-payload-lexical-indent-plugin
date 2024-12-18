'use client';
import { PluginComponent } from "@payloadcms/richtext-lexical";
import { COMMAND_PRIORITY_CRITICAL, COMMAND_PRIORITY_EDITOR, COMMAND_PRIORITY_HIGH, COMMAND_PRIORITY_LOW, COMMAND_PRIORITY_NORMAL, FOCUS_COMMAND } from "@payloadcms/richtext-lexical/lexical";
import { useLexicalComposerContext } from "@payloadcms/richtext-lexical/lexical/react/LexicalComposerContext";
import { useEffect } from "react";


export const FocusPlugin: PluginComponent<any> = () => {
    const [editor] = useLexicalComposerContext()

    useEffect(() => {
        editor.registerCommand(
            FOCUS_COMMAND,
            () => {
                console.log('FOCUS_COMMAND with COMMAND_PRIORITY_EDITOR is triggered')
                return false;
            },
            COMMAND_PRIORITY_EDITOR,
        );
        editor.registerCommand(
            FOCUS_COMMAND,
            () => {
                console.log('FOCUS_COMMAND with COMMAND_PRIORITY_LOW is triggered')
                return false;
            },
            COMMAND_PRIORITY_LOW,
        );
        editor.registerCommand(
            FOCUS_COMMAND,
            () => {
                console.log('FOCUS_COMMAND with COMMAND_PRIORITY_NORMAL is triggered')
                return false;
            },
            COMMAND_PRIORITY_NORMAL,
        );
        editor.registerCommand(
            FOCUS_COMMAND,
            () => {
                console.log('FOCUS_COMMAND with COMMAND_PRIORITY_HIGH is triggered')
                return false;
            },
            COMMAND_PRIORITY_HIGH,
        );
        editor.registerCommand(
            FOCUS_COMMAND,
            () => {
                console.log('FOCUS_COMMAND with COMMAND_PRIORITY_CRITICAL is triggered')
                return false;
            },
            COMMAND_PRIORITY_CRITICAL,
        );
    }, [editor]);
        


  return null
}

export default FocusPlugin