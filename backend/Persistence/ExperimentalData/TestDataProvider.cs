using Domain.Model;

namespace Persistence.ExperimentalData
{
  public class TestDataProvider
  {
    public static async Task Provide(DataContext context)
    {
      if (!context.Notes.Any())
      {
        var notes = new List<Note>
        {
            new Note
            {
                Title = "Title 1",
                Description = "Description 1",

            },
            new Note
            {
                Title = "Title 2",
                Description = "Description 2",

            },
            new Note
            {
                Title = "Title 3",
                Description = "Description 3",

            }
        };


        await context.Notes.AddRangeAsync(notes);
        await context.SaveChangesAsync();
      }
    }
  }
}
