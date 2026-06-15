-- Add views counter to notes table
ALTER TABLE public.notes ADD COLUMN IF NOT EXISTS views integer DEFAULT 0;

-- Reset all note views to 0
UPDATE public.notes SET views = 0;

-- Reset all freebie clicks to 0
UPDATE public.freebies SET clicks = 0, updated_at = NOW();

-- Create RPC function to safely increment note view counter
CREATE OR REPLACE FUNCTION public.increment_note_view(note_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.notes
  SET views = views + 1,
      updated_at = NOW()
  WHERE id = note_id;
END;
$$;

-- Grant execute permissions to all roles
GRANT EXECUTE ON FUNCTION public.increment_note_view(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.increment_freebie_click(uuid) TO anon, authenticated;
